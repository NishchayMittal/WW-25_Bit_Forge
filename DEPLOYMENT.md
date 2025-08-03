# 🚀 DeepBlue Discovery - Deployment Guide

This guide covers multiple deployment options for the DeepBlue Discovery application.

## 📋 Prerequisites

- Node.js 20 or higher
- npm or yarn package manager
- Git
- Environment variables configured

## 🌍 Environment Variables

Before deploying, make sure to set up your environment variables:

1. Copy `.env.production.template` to `.env.production`
2. Fill in all required values:
   - `NEXT_PUBLIC_YOUTUBE_API_KEY`
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`

## 🏗️ Build Process

The application uses Next.js with the following optimizations:
- Standalone output for Docker deployments
- Image optimization with WebP/AVIF support
- CSS optimization and minification
- TypeScript compilation
- ESLint validation

```bash
npm run build
```

## 🐋 Docker Deployment

### Local Docker Build
```bash
# Build the Docker image
npm run docker:build

# Run the container
npm run docker:run
```

### Docker Compose (Recommended for Production)
```bash
# Start all services
npm run docker:compose:up

# View logs
npm run docker:compose:logs

# Stop services
npm run docker:compose:down
```

The Docker setup includes:
- Multi-stage build for optimization
- Alpine Linux base image for security
- Non-root user execution
- Health checks
- Optional nginx reverse proxy

## ☁️ Cloud Deployments

### Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   npm run deploy:vercel
   ```

3. **Set Environment Variables:**
   - Go to your Vercel dashboard
   - Navigate to Settings > Environment Variables
   - Add all required environment variables

**Features:**
- Automatic HTTPS
- Global CDN
- Serverless functions
- Automatic deployments from Git

### Netlify

1. **Deploy via Git Integration:**
   - Connect your repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `.next`

2. **Configure Environment Variables:**
   - Go to Site Settings > Environment Variables
   - Add all required variables

**Features:**
- Built-in CI/CD
- Form handling
- Split testing
- Analytics

### Traditional VPS/Server

1. **Setup Process:**
   ```bash
   # Clone repository
   git clone your-repo-url
   cd deepblue-discovery
   
   # Install dependencies
   npm ci --only=production
   
   # Build application
   npm run build
   
   # Start application
   npm start
   ```

2. **PM2 Process Manager (Recommended):**
   ```bash
   # Install PM2
   npm install -g pm2
   
   # Start application
   pm2 start npm --name "deepblue-discovery" -- start
   
   # Save PM2 configuration
   pm2 save
   pm2 startup
   ```

## 🔧 CI/CD Pipeline

The project includes GitHub Actions workflow with:

### Automated Testing
- ESLint code quality checks
- TypeScript compilation
- Build verification

### Automated Deployment
- Docker image building and pushing
- Vercel deployment
- Environment-specific configurations

### Required GitHub Secrets:
```
NEXT_PUBLIC_YOUTUBE_API_KEY
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY
DOCKER_USERNAME
DOCKER_PASSWORD
VERCEL_TOKEN
VERCEL_ORG_ID
VERCEL_PROJECT_ID
```

## 🌐 Domain Configuration

### Custom Domain Setup

1. **DNS Configuration:**
   ```
   Type: CNAME
   Name: www (or subdomain)
   Value: your-deployment-url
   ```

2. **SSL Certificate:**
   - Most platforms (Vercel, Netlify) provide automatic SSL
   - For self-hosted: Use Let's Encrypt with Certbot

### HTTPS Enforcement
The nginx configuration includes HTTPS redirect and security headers.

## 📊 Monitoring & Health Checks

### Health Check Endpoint
```
GET /api/health
GET /healthz (alias)
```

Response:
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "environment": "production",
  "version": "0.1.0"
}
```

### Performance Monitoring
- Next.js built-in analytics
- Vercel Analytics (if deployed on Vercel)
- Custom monitoring can be added via Sentry or similar

## 🛡️ Security Configuration

### Security Headers
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

### Rate Limiting (nginx)
- API endpoints: 10 requests/minute
- General endpoints: 100 requests/minute

### Content Security Policy
Configured in Netlify and Vercel configurations.

## 🚦 Deployment Checklist

- [ ] Environment variables configured
- [ ] Build process successful
- [ ] Health check endpoint responding
- [ ] SSL certificate configured
- [ ] DNS records updated
- [ ] Security headers enabled
- [ ] Monitoring setup
- [ ] Backup strategy implemented
- [ ] CI/CD pipeline tested

## 🆘 Troubleshooting

### Common Issues

1. **Build Failures:**
   - Check Node.js version (requires 20+)
   - Verify all dependencies are installed
   - Check TypeScript compilation errors

2. **Environment Variable Issues:**
   - Ensure all required variables are set
   - Check variable naming (NEXT_PUBLIC_ prefix for client-side)
   - Verify API keys are valid

3. **Docker Issues:**
   - Check Docker daemon is running
   - Verify port 3000 is available
   - Check container logs: `docker logs container-name`

4. **Performance Issues:**
   - Enable CDN for static assets
   - Configure proper caching headers
   - Optimize images and videos

### Getting Help

- Check the application logs
- Verify environment configuration
- Test locally before deploying
- Use health check endpoint for debugging

## 🔄 Updates and Maintenance

### Regular Updates
1. Update dependencies: `npm update`
2. Security patches: `npm audit fix`
3. Next.js updates: Follow Next.js upgrade guide

### Backup Strategy
- Database backups (if applicable)
- Environment variable backup
- Static asset backup
- Code repository backup

---

For additional support, please refer to the main README.md or create an issue in the repository.
