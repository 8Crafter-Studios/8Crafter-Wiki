import { onBeforeMount } from "vue";
import { useRouter } from "vitepress";
import useData from "./data";

export default function useRedirect(): void {
  const { theme } = useData();

  const router = useRouter();

  function redirect(): void {
    const from: string = router.route.path.replace(/\.html$/, "");

    const to: string = theme.value.redirects[from];
    if (to === undefined) return;

    router.go(to).then((): void => {
      // This removes the trailing `.html` from the URL.
      if (location.href !== to) history.replaceState({}, "", location.href.replace(/\.html$/, ""));
    });
  }

  onBeforeMount(redirect);
  router.onAfterRouteChanged = redirect;
}
