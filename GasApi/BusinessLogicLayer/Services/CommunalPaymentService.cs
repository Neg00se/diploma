using AutoMapper;
using BusinessLogicLayer.Models;
using BusinessLogicLayer.Validation;
using DataAccessLayer.Entities;
using DataAccessLayer.IdentityItems;
using DataAccessLayer.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogicLayer.Services;

public class CommunalPaymentService : ICommunalPaymentService
{
	private readonly ICommunalPaymentsRepository _repo;
	private readonly IMapper _mapper;
	private readonly IUnitOfWork _unitOfWork;

	public CommunalPaymentService(ICommunalPaymentsRepository repo, IMapper mapper, IUnitOfWork unitOfWork)
	{

		_repo = repo;
		_mapper = mapper;
		_unitOfWork = unitOfWork;
	}

	public async Task<decimal> ToPayAsync(string userId)
	{
		var payments = await _repo.GetAllUserCommunalsAsync(userId);
		var userPayments = payments.Where(p => !p.IsPayed);
		decimal toPay = userPayments.Sum(up => up.ToPay) - userPayments.Sum(up => up.Payed);
		return toPay;

	}

	public async Task<IEnumerable<CommunalInfoModel>> GetAllAsync(string userId)
	{
		var communals = await _repo.GetAllUserCommunalsAsync(userId);
		var result = _mapper.Map<IEnumerable<CommunalInfoModel>>(communals);

		return result;
	}

	public async Task AddAsync(UserIndicatorsModel model, User user)
	{
		if (model.StartDate.Year + 1 < DateTime.Now.Year)
		{
			throw new GasAppException("invalid year");
		}
		if(model.GasUsed <= 0)
		{
			throw new GasAppException("invalid gas amount used");
		}

		var payment = _mapper.Map<CommunalPayment>(model);

		payment.RateId = user.RateId;
		var rate = await _repo.GetRateByIdAsync(payment.RateId);
		payment.Rate = rate;
		payment.ToPay = payment.GasUsed * payment.Rate.Price;
		payment.UserCode = user.PersonalCode;
		payment.UserId = user.Id;

		await _repo.AddAsync(payment);
		await _unitOfWork.SaveAsync();
	}


	public async Task PayBillsAsync(decimal payment, string userId)
	{
		if (payment <= 0)
		{
			throw new GasAppException("payment cannot be 0 or less");
		}

		decimal residue = payment;
		var payments = await _repo.GetAllUserCommunalsAsync(userId);
		var userPayments = payments.Where(p => !p.IsPayed);

		foreach (var up in userPayments)
		{
			if (residue >= (up.ToPay - up.Payed))
			{
				residue -= (up.ToPay - up.Payed);
				up.Payed = up.ToPay;
				up.IsPayed = true;
			}
			else if (residue != 0)
			{
				up.Payed += residue;
				residue = 0;
			}

		}

		_repo.UpdateAll(userPayments);
		await _unitOfWork.SaveAsync();
	}

	public async Task AddRandomUserCommunals(User user)
	{
		Random rnd = new Random();
		var rate = await _repo.GetRateByIdAsync(user.RateId);


		List<CommunalPayment> cpList = new()
		{
			new CommunalPayment
			{
				StartDate = new DateOnly(2023, 12, 1),
				EndDate = new DateOnly(2023, 12, 31),
				GasUsed = Convert.ToDecimal(rnd.Next(50, 200)),
				Rate = rate,
				RateId = rate.Id,
				UserCode = user.PersonalCode,
				UserId = user.Id,
				IsPayed = rnd.NextDouble() >= 0.5,
			},
			new CommunalPayment
				{
				StartDate = new DateOnly(2024, 1, 1),
				EndDate = new DateOnly(2024, 1, 31),
				GasUsed = Convert.ToDecimal(rnd.Next(50, 200)),
				Rate = rate,
				RateId = rate.Id,
				UserCode = user.PersonalCode,
				UserId = user.Id,
				IsPayed = rnd.NextDouble() >= 0.5,
				},
			new CommunalPayment
			{
				StartDate = new DateOnly(2024, 2, 1),
				EndDate = new DateOnly(2024, 2, 29),
				GasUsed = Convert.ToDecimal(rnd.Next(50, 200)),
				Rate = rate,
				RateId = rate.Id,
				UserCode = user.PersonalCode,
				UserId = user.Id,
				IsPayed = rnd.NextDouble() >= 0.5,
			},
			new CommunalPayment
			{
				StartDate = new DateOnly(2024, 3, 1),
				EndDate = new DateOnly(2024, 3, 31),
				GasUsed = Convert.ToDecimal(rnd.Next(50, 200)),
				Rate = rate,
				RateId = rate.Id,
				UserCode = user.PersonalCode,
				UserId = user.Id,
				IsPayed = rnd.NextDouble() >= 0.5,
			}
		};



		foreach (var cp in cpList)
		{
			cp.ToPay = cp.GasUsed * cp.Rate.Price;
			cp.Payed = 0m;
			if (cp.IsPayed)
			{
				cp.Payed = cp.ToPay;
			}
			await _repo.AddAsync(cp);
		}

		await _unitOfWork.SaveAsync();
	}
}
