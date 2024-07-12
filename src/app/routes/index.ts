import { Router } from 'express';
import { UserRoutes } from '../modules/User/user.route';
import { ProductRouter } from '../modules/products/products.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { CartRouter } from '../modules/cart/cart.route';

type TModuleRoutes = {
  path: string;
  route: Router;
};

const router = Router();

const moduleRoutes: TModuleRoutes[] = [
  {
    path:"/user" ,
    route: UserRoutes ,
  },
  {
    path:"/products" ,
    route: ProductRouter ,
  },
  {
    path:"/auth" ,
    route: AuthRoutes ,
  },
  {
    path:"/cart" ,
    route: CartRouter ,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
