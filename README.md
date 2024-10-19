## Description
- AI 기반 취업 컨설팅 백엔드 저장소
- Node.js, MySQL/TypeORM

## Installation

```bash
$ yarn install
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
		User ||--o{ UserCareer : has
        UserCareer ||--|{ UserCareerDetail : has
		User ||--o{ UserEducation : has
		User ||--o{ UserPositionFitness : analyze
		User ||--o{ UserPositionAnalysis : analyze
		UserPositionFitness ||--|| CompanyPosition : target
		UserPositionAnalysis |{--|| CompanyPosition : target
		CompanyPosition ||--o{ CompanyPositionDetail : has
		Company ||--o{ CompanyPosition : has
		User {
			string id "식별자"
			string email "이름"
			string password "암호화된 비밀번호"
			string birthDate "생년월일(YYMMDD)"
		}
		UserCareer {
		    string id "식별자"
			string userId "사용자 식별자"
			string companyName "회사명"
			Date startDate "근무시작일(ISO string)"
            Date endDate "근무종료일(ISO string)"
			string status "재직 상태 예) IN_OFFICE, RESIGNED"
			string businessCategory "업종 분류 예) 이커머스 서비스"
		}
		UserCareerDetail {
            string id "식별자"
            string userCareerId "사용자 경력 식별자"
            Date startDate "시작일(ISO string)"
            Date endDate "종료일(ISO string)"
            string title "제목 예) 실시간 인기 순위 조회 개발"
            string content "내용 예) 어떤 언어와 기술을 사용하여 개발하였는지 기술"
        }
		UserEducation {
            string id "식별자"
			string userId "사용자 식별자"
			string schoolName "학교명"
			Date startDate "입학일(ISO string)"
			Date endDate "졸업일(ISO string)"
			string degree "학위 예) HighSchool(고등), Bachelor(학사), Master(석사), Doctorate(박사)"
			string status "재학 상태 예) IN_SCHOOL, GRADUATED"
			string content "상세 내용 예) 전공, 부전공, 학점, 졸업논문"
		}
		CompanyPosition {
			string id "식별자"
			string companyId "회사 식별자"
			string name "포지션 이름 예) Backend Engineer"
			float minCareerLevel "최소 연차 예) 1(년)"
			float maxCareerLevel "최대 연차 예) 3(년)"
            string minEducationLevel "학력 예) HighSchool(고등), Bachelor(학사), Master(석사), Doctorate(박사)"
		}
		CompanyPositionDetail {
			string id "식별자"
			string companyPositionId "회사 포지션 식별자"
			string type "내용 종류 예) required, optional, tag"
			string content "내용 예) 이러이러한 기술에 대한 깊은 이해가 필요합니다."
		}
		UserPositionFitness {
			string id "식별자"
			string userId "사용자 식별자"
			string positionId "포지션 식별자"
			float careerLevel "연차 일치도 예) 0.512323"
			boolean educationLevel "최소학력 만족 여부"
			float businessCategoryLevel "업종 일치도 예) 0.512323"
		}
		UserPositionAnalysis {
			string id "식별자"
			string userId "사용자 식별자"
			string positionId "포지션 식별자"
			string type "분석 종류 예) duty(직무), resume(이력서)"
			string content "분석 내용 예) 직무 분석 결과 이러이러한 부분에 대한 보완이 필요합니다."
		}
		Company {
			string id "식별자"
			string name "이름"
			string logo "로고 이미지 주소 예) https://static.toss.im/icons/svg/logo-toss-blue.svg"
			string businessCategory "업종 분류 예) 이커머스 서비스"
		}
```
