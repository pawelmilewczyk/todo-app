import { Session } from "next-auth";

export type PropsWithSession<P = unknown> = P & { session: Session | null };
