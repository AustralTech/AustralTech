import React from 'react';
import Button from '../Button';

const LoginModal1 = () => {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flexCenter">
        <div class="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
          <button className="text-xl place-self-end">X</button>

          <div class="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">Bienvenido a <span class="customblue">TurnosApp</span></div>
          <div class="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Inicia sesión en tu cuenta</div>
          <form class="flex flex-col gap-3">
            <div class="block relative">
              <label for="email" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Email</label>
              <input type="text" id="email" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />

            </div>
            <div class="block relative">
              <label for="password" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Contraseña</label>
              <input type="text" id="password" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" />

            </div>
            <div><a class="text-sm customblue" href="#">¿Olvidaste la contraseña?</a></div>
            <Button
              type="button"
              title="Iniciar sesión"
              variant="btn_blue w-max m-auto"
            />
          </form>
          <div class="text-sm text-center mt-[1.6rem]">¿No tienes una cuenta? <a class="text-sm customblue" href="#">Regístrate!</a></div>
        </div>
      </div>
    </>
  );
};

export default LoginModal1;
