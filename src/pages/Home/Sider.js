import React from "react";

function Sider() {
  return (
    <div className="fixed left-0 bottom-0 px=10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="https://www.google.com/">
            <i class="ri-facebook-circle-line text-tertiary text-3xl"></i>
          </a>
          <i class="ri-mail-send-line text-tertiary text-3xl"></i>
          <i class="ri-linkedin-box-line text-tertiary text-3xl"></i>
          <i class="ri-github-line text-tertiary text-3xl"></i>
          <i class="ri-whatsapp-line text-tertiary text-3xl"></i>
        </div>
        <div className="w-[1px] h-32 bg-tertiary sm:hidden"></div>
      </div>
    </div>
  );
}

export default Sider;
