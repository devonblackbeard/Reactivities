using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Activities
{
    public class GetActivityList
    {
        public class Query : IRequest<List<Activity>>
        {

        }

        public class Handler : IRequestHandler<Query, List<Activity>>
        {
            private readonly DataContext _context;
            private readonly ILogger<GetActivityList> _logger;

            public Handler(DataContext context, ILogger<GetActivityList> logger) 
            {
                _context = context;
                _logger = logger;
            }

            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                
                return await _context.Activities.ToListAsync(cancellationToken);
            }
        }
    }
}
