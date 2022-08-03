using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Contracts
{
    public interface IRepositoryBase<T>
    {
        Task<ICollection<T>> GetAllAsync();
        Task<ICollection<T>> FindByConditionAsync(Expression<Func<T, bool>> condition);
        void Add(T entity);
        void Update(T entity);
        void Delete(T entity);
    }
}
