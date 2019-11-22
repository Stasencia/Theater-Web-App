using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Infrastructure.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ANGULARRRR.Controllers
{
    [Route("api/[controller]")]
    public class TheatricalEventsController : ControllerBase
    {
        ApplicationDbContext db;
        public TheatricalEventsController(ApplicationDbContext context)
        {
            db = context;
        }
        [HttpGet]
        public IEnumerable<TheatricalEvent> Get()
        {
            return db.TheatricalEvents.ToList();
        }

        [HttpGet("{id}")]
        public TheatricalEvent Get(int id)
        {
            TheatricalEvent theatricalEvent = db.TheatricalEvents.FirstOrDefault(x => x.Id == id);
            return theatricalEvent;
        }

        [HttpPost]
        public IActionResult Post([FromBody]TheatricalEvent theatricalEvent)
        {
            if (ModelState.IsValid)
            {
                db.TheatricalEvents.Add(theatricalEvent);
                db.SaveChanges();
                return Ok(theatricalEvent);
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]TheatricalEvent theatricalEvent)
        {
            if (ModelState.IsValid)
            {
                db.Update(theatricalEvent);
                db.SaveChanges();
                return Ok(theatricalEvent);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            TheatricalEvent theatricalEvent = db.TheatricalEvents.FirstOrDefault(x => x.Id == id);
            if (theatricalEvent != null)
            {
                db.TheatricalEvents.Remove(theatricalEvent);
                db.SaveChanges();
            }
            return Ok(theatricalEvent);
        }
    }
}