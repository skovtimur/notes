namespace FullstackApp1.Extensions;

public static class UseFaviconExtension
{
    public static IApplicationBuilder UseFavicon(this IApplicationBuilder app)
    {
        return app.UseMiddleware<FaviconMiddleware>();
    }
}