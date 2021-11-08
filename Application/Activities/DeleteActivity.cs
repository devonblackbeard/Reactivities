using MediatR;
using Persistence;
using System;
using System.ComponentModel.DataAnnotations;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Activities
{
    public class DeleteActivity
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.Id);
                if (activity != null)
                {
                    _context.Activities.Remove(activity);
                    await _context.SaveChangesAsync(); 
                }
                else
                {
                    throw new ValidationException("Activity Not Found!");
                }

                return Unit.Value;
            }
        }
    }
}
