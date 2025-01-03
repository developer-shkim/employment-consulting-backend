## Description
- 이력서, 구인 공고를 비교 분석하여 취업 컨설팅을 해주는 서비스를 개발 중이고 아직 진행 중입니다.
- 본 저장소는 서비스 일부인 백엔드 코드만 포함되어 있고, 추후 AI 를 연동하여 완성할 예정입니다.
- 제공하는 API 는 아래와 같고 http://localhost:3000/swagger 에서 확인할 수 있습니다.
<img width="1217" alt="스크린샷 2025-01-03 오후 11 14 47" src="https://github.com/user-attachments/assets/5e5c02d4-d1ff-4c1f-85d2-482bf5645e85" />

## Installation

```bash
$ yarn install
```

## Running docker-compose

```bash
$ docker-compose up -d
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```


## ERD
```mermaid
erDiagram
		User ||--o{ Career : has
        Career ||--|{ CareerDetail : has
		User ||--o{ Education : has
		User ||--o{ UserPositionFitness : analyze
		User ||--o{ UserPositionAnalysis : analyze
		UserPositionFitness ||--|| Position : target
		UserPositionAnalysis |{--|| Position : target
		Position ||--o{ PositionDetail : has
		Company ||--o{ Position : has
		User {
			string id "식별자"
            string name "이름"
			string email "이메일주소(PK)"
			string password "암호화된 비밀번호"
			string birthDate "생년월일(YYMMDD)"
		}
		Career {
		    string id "식별자"
			string userId "사용자 식별자"
			string companyName "회사명"
			Date startDate "입사일(ISO string)"
            Date endDate "퇴사일(ISO string)"
			string status "재직 상태 예) IN_OFFICE, RESIGNED"
			string businessCategory "업종 분류 예) 이커머스 서비스"
		}
		CareerDetail {
            string id "식별자"
            string careerId "사용자 경력 식별자"
            Date startDate "시작일(ISO string)"
            Date endDate "종료일(ISO string)"
            string title "제목 예) 실시간 인기 순위 조회 개발"
            string content "내용 예) 어떤 언어와 기술을 사용하여 개발하였는지 기술"
        }
		Education {
            string id "식별자"
			string userId "사용자 식별자"
			string schoolName "학교명"
			Date startDate "입학일(ISO string)"
			Date endDate "졸업일(ISO string)"
			string degree "학위 예) HIGH_SCHOOL(고등), BACHELOR(학사), MASTER(석사), DOCTORATE(박사)"
			string status "재학 상태 예) IN_SCHOOL, GRADUATED"
			string content "상세 내용 예) 전공, 부전공, 학점, 졸업논문"
		}
		Position {
			string id "식별자"
			string companyId "회사 식별자"
			string name "포지션 이름 예) Backend Engineer"
			int minCareerLevel "최소 연차 예) 1(년)"
            int maxCareerLevel "최대 연차 예) 3(년)"
            string minEducationDegree "최소 학력 예) HIGH_SCHOOL(고등), BACHELOR(학사), MASTER(석사), DOCTORATE(박사)"
		}
		PositionDetail {
			string id "식별자"
			string PositionId "회사 포지션 식별자"
			string type "내용 종류 예) REQUIRED, OPTIONAL, TAG"
			string content "내용 예) 이러이러한 기술에 대한 깊은 이해가 필요합니다."
		}
		UserPositionFitness {
			string id "식별자"
			string userId "사용자 식별자"
			string positionId "포지션 식별자"
			float careerLevel "연차 일치도 예) 0.512323"
			boolean educationLevel "최소학력 만족 여부"
			float businessCategoryLevel "업종 일치도 예) 0.512323"
            float dutyLevel "직무 일치도 예) 0.512323"
		}
		UserPositionAnalysis {
			string id "식별자"
			string userId "사용자 식별자"
			string positionId "포지션 식별자"
			string type "분석 종류 예) DUTY(직무), RESUME(이력서)"
			string content "분석 내용 예) 직무 분석 결과 이러이러한 부분에 대한 보완이 필요합니다."
		}
		Company {
			string id "식별자"
			string name "이름"
			string logo "로고 이미지 주소 예) https://static.toss.im/icons/svg/logo-toss-blue.svg"
			string businessCategory "업종 분류 예) 이커머스 서비스"
		}
```
