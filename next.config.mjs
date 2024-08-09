/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
            // domains: ["cdn.icon-icons.com","w7.pngwing.com"],
        remotePatterns:
        [
            {
              protocol: 'https',
              hostname: 'w7.pngwing.com',
              
            },
            {
                protocol: 'https',
                hostname: 'cdn.icon-icons.com',
                
              },
              {protocol:'https',
                hostname:"banner2.cleanpng.com"
              }

          ],
    }
};

export default nextConfig;
