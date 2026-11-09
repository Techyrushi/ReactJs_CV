"use client";

import { useEffect, useState } from "react";
import { getExperienceDuration } from "@/lib/experience";

export default function useExperienceDuration() {
  const [duration, setDuration] = useState("3+");

  useEffect(() => {
    let timeout;

    const updateDuration = () => {
      setDuration(getExperienceDuration());
    };

    const scheduleNextUpdate = () => {
      const now = new Date();
      const nextMonth = Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth() + 1,
        1
      );

      timeout = setTimeout(() => {
        updateDuration();
        scheduleNextUpdate();
      }, nextMonth - now.getTime() + 50);
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        updateDuration();
      }
    };

    updateDuration();
    scheduleNextUpdate();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return duration;
}
