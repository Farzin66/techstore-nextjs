

const UsersBanner = () => {
  return (
    <div className="relative mb-6 flex items-center justify-between overflow-hidden px-6 py-8 sm:px-8 sm:py-10">
      <div className="relative z-10">
        <h1 className="text-2xl font-black tracking-tight text-[#1E293B] sm:text-3xl">
          User Management
        </h1>

        <p className="mt-2 max-w-xl text-xs font-medium leading-relaxed text-gray-400 sm:text-sm">
          Manage platform users, roles, and account statuses.
        </p> 
      </div>

      <div className="border flex items-center justify-center p-2 gap-3 border-primary/10 bg-primary/10 text-black text-sm rounded-2xl">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
        2 Active Platform Users
      </div>
    </div>
  );
};

export default UsersBanner;