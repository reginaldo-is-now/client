import React from "react";

function Sider() {
  return (
    <div className="fixed left-0 bottom-0 px=10">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3">
          <i class="ri-facebook-circle-line text-tertiary text-3xl"></i>
          <i class="ri-mail-send-line text-tertiary text-3xl"></i>
          <i class="ri-linkedin-box-line text-tertiary text-3xl"></i>
          <i class="ri-github-line text-tertiary text-3xl"></i>
          <i class="ri-whatsapp-line text-tertiary text-3xl"></i>
        </div>
        <div className="w-[1px] h-52 bg-tertiary"></div>
      </div>
    </div>
  );
}

export default Sider;
