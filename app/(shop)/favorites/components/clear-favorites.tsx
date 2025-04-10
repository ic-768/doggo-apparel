import { useQueryClient } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import Confirmation from "@/components/ui/confirmation";
import { useFavorites } from "@/context/favorites/use-favorites";

export default function ClearFavorites() {
  const { clearFavorites } = useFavorites();

  const queryClient = useQueryClient();

  const onClick = async () => {
    clearFavorites();
    await queryClient.setQueryData(["favorites"], []);
  };

  return (
    <Confirmation
      onClick={onClick}
      title="Are you absolutely sure?"
      description="Once you clear your favorites, you can't get them back."
      triggerComponent={
        <Button variant="destructive" className="ml-auto self-end">
          Clear Favorites
        </Button>
      }
    />
  );
}
