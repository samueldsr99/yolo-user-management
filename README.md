# yolo-user-management

YOLO interview task: Responsive Dashboard Application

You can check a live version of the client [here](https://yolo-client-two.vercel.app)

# Setup (frontend)

Ensure to specify the .env variables correctly

```
VITE_BASE_URL=<your-api-base-url>
```

Dev:

```bash
cd ./client/

# -- If using pnpm
pnpm install
pnpm run dev
# -- If using yarn
yarn
yarn run dev
# -- If using npm
npm install
npm run dev
```

Production:

```bash
cd ./client/

# -- If using pnpm
pnpm install
pnpm build
pnpm start
# -- If using yarn
yarn
yarn build
yarn start
# -- If using npm
npm install
npm build
npm start
```

# Setup (backend)

Ensure to specify the .env variables correctly

```
NODE_ENV=develop | production
PORT=<your-port-number>
DB_URL=<your-db-connection-url>
```

Dev:

```bash
cd ./server/

# -- If using pnpm
pnpm install
pnpm start:dev
# -- If using yarn
yarn
yarn start:dev
# -- If using npm
npm install
npm start:dev
```

Production:

```bash
cd ./server/

# -- If using pnpm
pnpm install
pnpm build
pnpm start
# -- If using yarn
yarn
yarn build
yarn start
# -- If using npm
npm install
npm build
npm start
```
