"use client";

import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { actionFunction } from "@/utils/types";
import { useActionState } from "react";

const initialState = {
  message: "",
};

function DefaultForm({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useActionState(action, initialState);
  const { toast } = useToast();
  useEffect(() => {
    if (state.message) {
      toast({ description: state.message });
    }
  }, [state, toast]);
  return <form action={formAction}>{children}</form>;
}
export default DefaultForm;
