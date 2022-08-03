using Contracts;
using Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Repository
{
    public abstract class RepositoryBase<T> : IRepositoryBase<T> where T : class
    {

        ApplicationContext _applicationContext;

        public RepositoryBase(ApplicationContext applicationContext)
        {
            _applicationContext = applicationContext;
        }

        public void Add(T entity)
        {
            _applicationContext.Set<T>().Add(entity);
            _applicationContext.SaveChanges();
        }

        public void Delete(T entity)
        {
            _applicationContext.Set<T>().Remove(entity);
            _applicationContext.SaveChanges();
        }

        public async Task<ICollection<T>> FindByConditionAsync(Expression<Func<T, bool>> condition)
        {
            return await _applicationContext.Set<T>().Where(condition).ToListAsync();
        }

        async public Task<ICollection<T>> GetAllAsync()
        {
            return await _applicationContext.Set<T>().ToListAsync();
        }

        public void Update(T entity)
        {
            _applicationContext.Set<T>().Update(entity);
            _applicationContext.SaveChanges();
        }
    }
}
