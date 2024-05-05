using DataAccessLayer.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Repositories;

public class TarifPlanRepo : ITarifPlanRepo
{
	private readonly GasDbContext _context;

	public TarifPlanRepo(GasDbContext context)
	{
		_context = context;
	}

	public async Task<List<Rate>> GetTarifsAsync()
	{
		var rates = await _context.Rates.ToListAsync();
		return rates;
	}

	public async Task<Rate> GetByIdAsync(int id)
	{
		var rate = await _context.Rates.FindAsync(id);
		return rate;
	}
}
