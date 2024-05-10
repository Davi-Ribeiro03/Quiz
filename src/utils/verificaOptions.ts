import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";


export const verificaOptions = (option:string, nivel:string, router: AppRouterInstance) => {
    if (!option || !nivel) {
      router.push("/");
    }
  };