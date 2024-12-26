import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface ConfirmationProps {
  triggerComponent: React.ReactNode;
  onClick: () => void;
  title: string;
  description: string;
}

export default function Confirmation({
  triggerComponent,
  onClick,
  title,
  description,
}: ConfirmationProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{triggerComponent}</AlertDialogTrigger>
      <AlertDialogContent className="max-w-96 rounded-lg">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onClick}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
