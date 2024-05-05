using BusinessLogicLayer.Services;

namespace GasApi.Utils;

public static class InjectServices
{
	public static IServiceCollection AddServices(this IServiceCollection services)
	{
		services.AddTransient<IUserService , UserService>();
		services.AddTransient<ICommunalPaymentService, CommunalPaymentService>();

		return services;
	}
}
