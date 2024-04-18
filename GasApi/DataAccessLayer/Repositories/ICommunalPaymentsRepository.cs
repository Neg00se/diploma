using DataAccessLayer.Entities;

namespace DataAccessLayer.Repositories
{
	public interface ICommunalPaymentsRepository
	{
		Task AddAsync(CommunalPayment cp);
		Task DeleteByIdAsync(int id);
		Task<List<CommunalPayment>> GetAllAsync();
		Task<CommunalPayment> GetByIdAsync(int id);
		void Update(CommunalPayment cp);
	}
}