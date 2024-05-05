using BusinessLogicLayer.Models;
using DataAccessLayer.IdentityItems;

namespace BusinessLogicLayer.Services
{
	public interface ICommunalPaymentService
	{
		Task AddAsync(UserIndicatorsModel model, User user);
		Task<IEnumerable<CommunalInfoModel>> GetAllAsync(string userId);
		Task PayBillsAsync(decimal payment, string userId);
		Task<decimal> ToPayAsync(string userId);
		Task AddRandomUserCommunals(User user);
	}
}