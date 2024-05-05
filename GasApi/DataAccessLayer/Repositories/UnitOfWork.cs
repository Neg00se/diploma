using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Repositories;

public class UnitOfWork : IUnitOfWork
{
	private readonly GasDbContext _context;

	public UnitOfWork(GasDbContext context)
	{
		_context = context;
	}

	public async Task SaveAsync()
	{
		await _context.SaveChangesAsync();
	}
}
