// API Proposal
const actions = combineActions({
  router,
  counters,
  todos,
  routerActions,
});

const actionsUnion = unionizeActions(actions);
type RootAction = typeof actionsUnion;
