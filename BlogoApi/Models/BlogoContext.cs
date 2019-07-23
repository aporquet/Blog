using Microsoft.EntityFrameworkCore;

namespace BlogoApi.Models
{
    public class BlogoContext : DbContext
    {
        public BlogoContext(DbContextOptions<BlogoContext> options)
            : base(options)
        {
        }

        public DbSet<Publication> Publication { get; set; }
    }
}