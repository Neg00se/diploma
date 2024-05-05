using DataAccessLayer.Repositories;

namespace GasApi.Utils
{
	public static class InjectRepos
	{

		public static IServiceCollection AddRepos(this IServiceCollection services)
		{
			services.AddScoped<IUnitOfWork, UnitOfWork>();
			services.AddScoped<ITarifPlanRepo , TarifPlanRepo>();
			services.AddScoped<ICommunalPaymentsRepository, CommunalPaymentsRepository>();

			return services;
		}
	}
}
