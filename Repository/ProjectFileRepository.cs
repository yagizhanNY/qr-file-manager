using Contracts;
using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository
{
    public class ProjectFileRepository : RepositoryBase<ProjectFile>, IProjectFileRepository
    {
        public ProjectFileRepository(ApplicationContext applicationContext) : base(applicationContext)
        {

        }
    }
}
