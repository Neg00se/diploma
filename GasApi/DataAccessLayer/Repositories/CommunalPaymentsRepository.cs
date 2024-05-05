using DataAccessLayer.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Repositories;

public class CommunalPaymentsRepository : ICommunalPaymentsRepository
{
	private readonly GasDbContext _context;

	public CommunalPaymentsRepository(GasDbContext context)
	{
		_context = context;
	}

	public async Task<IEnumerable<CommunalPayment>> GetAllUserCommunalsAsync(string userId)
	{
		var payments = await _context.CommunalPayments.Where(cp => cp.UserId == userId).Include(cp => cp.Rate).ToListAsync();
		return payments.OrderBy(c => c.StartDate.DayNumber);
	}

	public async Task<CommunalPayment> GetByIdAsync(int id)
	{
		var payment = await _context.CommunalPayments.Include(cp => cp.Rate).FirstOrDefaultAsync(
			p => p.Id == id);
		return payment;
	}

	public async Task AddAsync(CommunalPayment cp)
	{
		await _context.AddAsync(cp);
	}

	public void UpdateAll(IEnumerable<CommunalPayment> cp)
	{
		_context.UpdateRange(cp);
	}

	public async Task DeleteByIdAsync(int id)
	{
		var cp = await _context.CommunalPayments.FindAsync(id);
		if (cp is not null)
		{
			_context.CommunalPayments.Remove(cp);
		}
	}

	public async Task<Rate> GetRateByIdAsync(int rateId)
	{
		var rate = await _context.Rates.FindAsync(rateId);

		return rate;

	}
}
