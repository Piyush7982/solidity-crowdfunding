import { auth } from "@/auth";
import WalletConnection from "@/components/WalletConnection";

const page = async () => {
  const session = await auth();
  let user;
  if (session?.user) {
    user = true;
  }
  return (
    <div>
      <h1>user</h1>
      {session?.user && <>{session?.user?.id}</>}
      {!session?.user && (
        <WalletConnection>
          <button type="submit">connect</button>
        </WalletConnection>
      )}
    </div>
  );
};

export default page;
