import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

/* ---------------- Root ---------------- */

const Dialog = (props: React.ComponentProps<typeof DialogPrimitive.Root>) => {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
};

/* ---------------- Trigger ---------------- */

const DialogTrigger = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>
>((props, ref) => (
  <DialogPrimitive.Trigger
    ref={ref}
    data-slot="dialog-trigger"
    {...props}
  />
));
DialogTrigger.displayName = "DialogTrigger";

/* ---------------- Portal ---------------- */

const DialogPortal = ({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) => {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
};

/* ---------------- Overlay ---------------- */

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    data-slot="dialog-overlay"
    className="fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0"
    {...props}
  />
));
DialogOverlay.displayName = "DialogOverlay";

/* ---------------- Content ---------------- */

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    showCloseButton?: boolean;
  }
>(({ children, showCloseButton = true, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      data-slot="dialog-content"
      className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95"
      {...props}
    >
      {children}

      {showCloseButton && (
        <DialogPrimitive.Close
          data-slot="dialog-close"
          className="absolute right-4 top-4 opacity-70 transition-opacity hover:opacity-100 focus:outline-none"
        >
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      )}
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = "DialogContent";

/* ---------------- Header / Footer ---------------- */

const DialogHeader = ({
  ...props
}: React.ComponentProps<"div">) => (
  <div
    data-slot="dialog-header"
    className="flex flex-col gap-2 text-center sm:text-left"
    {...props}
  />
);

const DialogFooter = ({
  ...props
}: React.ComponentProps<"div">) => (
  <div
    data-slot="dialog-footer"
    className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end"
    {...props}
  />
);

/* ---------------- Title / Description ---------------- */

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>((props, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    data-slot="dialog-title"
    className="text-lg font-semibold"
    {...props}
  />
));
DialogTitle.displayName = "DialogTitle";

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>((props, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    data-slot="dialog-description"
    className="text-sm text-muted-foreground"
    {...props}
  />
));
DialogDescription.displayName = "DialogDescription";

/* ---------------- Exports ---------------- */

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
};