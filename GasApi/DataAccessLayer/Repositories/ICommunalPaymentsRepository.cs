using DataAccessLayer.Entities;

namespace DataAccessLayer.Repositories
{
	public interface ICommunalPaymentsRepository
	{
		Task AddAsync(CommunalPayment cp);
		Task DeleteByIdAsync(int id);
		Task<IEnumerable<CommunalPayment>> GetAllUserCommunalsAsync(string userId);
		Task<CommunalPayment> GetByIdAsync(int id);
		Task<Rate> GetRateByIdAsync(int rateId);
		void UpdateAll(IEnumerable<CommunalPayment> cp);
	}
}