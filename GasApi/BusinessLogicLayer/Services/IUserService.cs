using BusinessLogicLayer.Models;
using System.Security.Claims;

namespace BusinessLogicLayer.Services
{
	public interface IUserService
	{
		Task ChangeUserPlan(int rateId, string userId);
		Task<UserModel> GetUserInfo(ClaimsPrincipal principal);
		Task<RatePlanModel> GetUserRatePlan(ClaimsPrincipal principal);
		Task<int> GetUserDefaultRandomRateId();
	}
}