export function callRefreshPromotionDetailsHandler(
  res: any,
  ctx: any,
  isOrderDataRequired: boolean,
  getActualStore: () => void,
): any | Promise<any> {
  if (isOrderDataRequired) {
    return res(ctx.status(200), ctx.json("resRefreshPromotionDetailsPia"));
  }
  if (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    getActualStore().creditCheckResult === CreditCheckResult.LoggedInWithoutAcc
  ) {
    return res(
      ctx.status(200),
      ctx.json("resRefreshPromotionDetailsEmptyResponse"),
    );
  }
  return res(ctx.status(200), ctx.json("resRefreshPromotionDetails"));
}
