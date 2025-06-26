import { useCallback, useEffect, useState } from "react";
import type { Mood } from "../schema";
import { useNavigate } from "react-router";

type UseMoodsReturn = {
  moods: Mood[] | undefined;
  isLoading: boolean;
};

const useMoods = (): UseMoodsReturn => {
  const [moods, setMoods] = useState<Mood[] | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(true);
  const navigate = useNavigate();

  const getMoods = useCallback(async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_PLASMA_API}/mood`);
      if (!response.ok) {
        throw new Error(
          `An Error has occurred while fetching Moods, error: ${response.status}, ${response.statusText}`
        );
      }
      if (mounted) {
        const { data } = await response.json();
        setMoods(data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      navigate(`/404`);
    }
  }, [mounted, navigate]);

  useEffect(() => {
    getMoods();
    return () => {
      setMounted(false);
    };
  }, [getMoods]);

  return {
    moods: moods,
    isLoading: isLoading,
  };
};

export default useMoods;
