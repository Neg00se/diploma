using AutoMapper;
using BusinessLogicLayer.Models;
using DataAccessLayer.IdentityItems;
using DataAccessLayer.Repositories;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogicLayer.Services;

public class UserService : IUserService
{
	private readonly UserManager<User> _userManager;
	private readonly IMapper _mapper;
	private readonly ITarifPlanRepo _planRepo;

	public UserService(UserManager<User> userManager, IMapper mapper, ITarifPlanRepo planRepo)
	{
		_userManager = userManager;
		_mapper = mapper;
		_planRepo = planRepo;
	}

	public async Task<int> GetUserDefaultRandomRateId()
	{
		var rates = await _planRepo.GetTarifsAsync();
		Random rnd = new Random();
		int rndIndex = rnd.Next(rates.Count);
		int id = rates[rndIndex].Id;
		return id;
	}

	public async Task<UserModel> GetUserInfo(ClaimsPrincipal principal)
	{
		var user = await _userManager.GetUserAsync(principal);
		var userRole = await _userManager.GetRolesAsync(user);
		var result = _mapper.Map<UserModel>(user);
		result.RoleName = userRole.FirstOrDefault();
		return result;

	}

	public async Task<RatePlanModel> GetUserRatePlan(ClaimsPrincipal principal) 
	{
		var user = await _userManager.GetUserAsync(principal);
		var planRate = await _planRepo.GetByIdAsync(user.RateId);
		var result = _mapper.Map<RatePlanModel>(planRate);
		return result;
	}

	public async Task ChangeUserPlan(int rateId, string userId)
	{
		var user = await _userManager.FindByIdAsync(userId);
		var rate = await _planRepo.GetByIdAsync(rateId);
		if (rate is not null)
		{
			user.RateId = rate.Id;
		}

		await _userManager.UpdateAsync(user);
	}

}
