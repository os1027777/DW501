package 자바0913;

public class 자바기초 {

	public static void main(String[] args) {
		/* 주의점
		 * 1.당분간 코딩은 main {}안에 한다.(메소드 수업 전까지)
		 * 2.실행하는 방법은 ctrl+F11을 동시에 누른다.
		 */
		
		//자바(==커피) 변수 선언
		//자바는 엄격한 타입언어이다.
		int 돈 = 100; // 데이터가 숫자면 int! (선언)
		// int : 데이터 타입
		// x : 변수 이름(마음대로/자바는 한글지원 가능)
		// = : 대입 연산자
		// 100 : 데이터
		돈 = 50;// 대입 연산자가 아래 또 나오면 기존에 100은 없어진다.
		// 최종 돈 값은? => 50
		
		int 고기 =3;
		고기 = 10;
		// int 고기 = 10; 자바에서 변수이름은 중복될 수 없다.
		고기 = 5;
		고기 = 1; // 대입 연산자는 기존 값을 무시하고 새로운 값을 넣는다.
		//최종 고기 값은? => 1
		//연산자 : +,-,/,%
		고기 = 고기 + 3;
		//최종 고기 값은? => 4
		고기 = 고기 + 고기;
		//최종 고기 값은? => 8
		
		int 초밥 = 5;
		초밥 = 초밥 *2;
		//최종 초밥 값은? => 10
		초밥 = 초밥 /2;
		//최종 초밥 값은? => 5
		
		int 내지갑 = 50000;
		int 만원몇장 = 0;
		만원몇장 = 내지갑 / 10000; 
		//만원몇장 변수에 만원으로 바꿀 수 있는 수를 대입하시오.
		System.out.println(만원몇장);
		
		int 국어 = 80;
		int 수학 = 15;
		int 영어 = 65;
		int 평균 = 0;
		
		평균 = (국어 + 수학 + 영어)/3;
		// 과목평균 구하시오 ( 소수점 제외 )
		System.out.println("평균점수는? =>"+평균);
		
		/* 
		 * 자바 데이터 타입 종류 (일반 데이터타입 8 + 클래스타입으로 구성 됨)
		 * short,byte : 숫자
		 * int : 숫자 ***
		 * long : 숫자 ***
		 * double : 숫자 (소수)
		 * float : 숫자 (소수)
		 * char : 문자
		 * String : 문자 *** => 클래스타입
		 * boolean : true , false ***
		 */
		
		String 이름 = "홍길동";
		이름 = 이름 + "철수"; // 문자와 문자가 더해진다.
		System.out.println("이름은 =>"+이름);
		
		//문자를 숫자로 변환
		String num = "10";
		int num2 = 0;
		num2 = Integer.parseInt(num); //문자 -> 숫자
		System.out.println("문자에서 숫자로 변환된 값은" + num2);
		
		
	}

}
