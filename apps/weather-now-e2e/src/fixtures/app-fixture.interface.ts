interface ICard {
  headerLabel: string,
  selector: string
}

export interface IAppFixture {
  firstCard: ICard;
  secondCard: ICard;
  thirdCard: ICard;
}
