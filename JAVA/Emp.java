package 학원용;

class Emp{
	private String 사원이름;
	private int 사원번호;
	private int 급여;
	private int 보너스;
	//생성자(리턴 타입이 없는 메소드)
	Emp(){
		
	}
	Emp(int 사원번호, String 사원이름, int 급여, int 보너스){
		//파라미터로 받아온 값을 필드변수에 대입하겠다.
		this.사원번호 = 사원번호;
		this.급여 = 급여;
		this.사원이름 = 사원이름;
		this.보너스 = 보너스;
		
	}
	
}
