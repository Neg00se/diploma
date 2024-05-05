
namespace DataAccessLayer.Repositories
{
	public interface IUnitOfWork
	{
		Task SaveAsync();
	}
}