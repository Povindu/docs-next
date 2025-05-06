
ARG NODE_VERSION=22.14.0
FROM node:${NODE_VERSION}-alpine AS base

# Set working dir to a location the `node` user can write to
WORKDIR /home/node/app
RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

# Install all dependencies (including dev) as node user
FROM base AS deps

USER node

# Copy full app into container so Astro can access files (required in this case)
COPY --chown=node:node . .

# Install all dependencies (dev included — required for Astro to work at build/runtime)
RUN npm install

# Final runtime stage
FROM base AS final

ENV NODE_ENV=production

USER node
WORKDIR /home/node/app

COPY --from=deps --chown=node:node /home/node/app .

# Optional: remove dev dependencies if not needed at runtime
# RUN npm prune --omit=dev

EXPOSE 4321

CMD ["npm","run", "docker-start"]




