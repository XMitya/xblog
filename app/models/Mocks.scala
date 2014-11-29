package models

import org.joda.time.DateTime

/**
 * Created by xmitya on 29.11.14.
 */
object Mocks {

  val userMock = User.findOneById(3).getOrElse(new User(None,"2","3","4",None))
  val dateMock = DateTime.now()
  val text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. \nQuisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis \ndolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. \nAliquam in felis sit amet augue."

  val articleMocks = List(
    new Article(Some(1),"Test article 1",text,userMock,Set("test"),dateMock,26),
    new Article(Some(2),"Test article 2",text,userMock,Set("test"),dateMock,26),
    new Article(Some(3),"Test article 3",text,userMock,Set("test"),dateMock,26),
    new Article(Some(4),"Test article 4",text,userMock,Set("test"),dateMock,26)
  )
}
