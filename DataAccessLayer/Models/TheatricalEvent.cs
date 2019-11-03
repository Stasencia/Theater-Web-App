using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ANGULARRRR.DataAccessLayer.Models
{
    public class TheatricalEvent
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime Duration { get; set; }
        public string Image { get; set; }
    }
}
