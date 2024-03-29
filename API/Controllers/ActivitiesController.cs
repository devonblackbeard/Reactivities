﻿using Application.Activities;
using Domain;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {       
        [HttpGet]
        public async Task<IActionResult> GetActivities(CancellationToken ct)
        {
            return HandleResult(await Mediator.Send(new GetActivityList.Query(), ct));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> GetActivity(Guid id)
        {          
            return HandleResult(await Mediator.Send(new GetActivityDetail.Query { Id = id }));
        }

        [HttpPost]
        public async Task<IActionResult> CreateActivity(Activity activity)
        {
            return HandleResult(await Mediator.Send(new CreateActivity.Command { Activity = activity }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditActivity(Guid id, Activity activity)
        {
            activity.Id = id;
            return HandleResult(await Mediator.Send(new EditActivity.Command { Activity = activity }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id)
        {            
            return HandleResult(await Mediator.Send(new DeleteActivity.Command { Id= id }));
        }
    }
}
