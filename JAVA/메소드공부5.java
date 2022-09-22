package 자바0913;

public class 메소드공부5 {
	
	/*
	 * public static : 접근 지정자
	 * int : 리턴타입
	 * gersum : 메소드 이름
	 * int x, int y : 파라미터 값, 매개변수, 인수 값 ...
	 */

	public static int getsum(int x, int y) {
		return x + y;
	}
	
	/*
	 * public static : 접근 지정자
	 * String : 리턴 타입
	 * gerword : 메소드 이름
	 * x , y : 파라미터 값
	 */
	//boolean : true or false
	public static boolean isLogin(boolean isLogin) {
		return isLogin;
	}
	
	public static String getWord(String word) {
		return word;
	}

	public static void main(String[] args) {
		String word = getWord("치즈돈가스");
		System.out.println(word);
		int result = getsum(10,10);
		System.out.println("결과:"+result);
		boolean isResult = isLogin(true);
		System.out.println(isResult);
	}
	

}
