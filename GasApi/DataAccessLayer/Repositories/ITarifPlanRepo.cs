using DataAccessLayer.Entities;

namespace DataAccessLayer.Repositories
{
	public interface ITarifPlanRepo
	{
		Task<List<Rate>> GetTarifsAsync();
		Task<Rate> GetByIdAsync(int id);
	}
}