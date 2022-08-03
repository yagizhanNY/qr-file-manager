using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    [Table("projectfiles")]
    public class ProjectFile
    {
        public Guid Id { get; set; }
        [Required(ErrorMessage = "Code attribute is required.")]
        public string Code { get; set; }
        [Required(ErrorMessage = "Url attribute is required.")]
        public string Url { get; set; }
        [Required(ErrorMessage = "Name attribute is required.")]
        public string Name { get; set; }
    }
}
