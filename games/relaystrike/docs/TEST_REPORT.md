# 검증 기록 — 2026-09-23

Internal N Crush 0.2.0 / Godot 4.4.1

## 수정 전 재현

기존 관전 코드가 플레이어 Camera3D의 top_level과 전역 좌표를 변경하고, 부활 시 X/Z·회전을 초기화하지 않았습니다. 관전 후 부활 재현에서 카메라와 캐릭터 눈 사이 오차 111.32m를 관측했습니다. 관전 전용 카메라와 부활 시 로컬 변환 초기화로 수정했습니다.

## 수행한 검증

- 프로젝트 가져오기·컴파일.
- 기본 규칙 시험 28/28 통과: 메딕 제한, 경제, 물 피해, 탄약, 방어구, 부활 충돌체, 포탑, 의료 회복, 목표 모드 등.
- 수정 회귀 검사 58/58 통과: 반복 사망/관전/부활 시 카메라 오차 0, 관전 입력으로 캐릭터가 이동하지 않음, 단발·연발·3점사, 자동 재장전, 유한 탄약, 살아 있을 때/죽은 뒤 장비 예약, 부활 시 병과·주무기·보조무기·가젯 적용, 구매 비용 1회 청구, 숫자 슬롯과 F/Q/E 배치, 이동 속도, 경계/낙하 복구, 총구 위치와 벽 충돌, 27개 모델 생성·애니메이션 실행, 정조준 가시성, 피격 시 물리 위치 보존.
- 실제 ENet 서버/클라이언트를 별도 Linux 프로세스로 실행. 클라이언트가 장비 변경을 서버에 예약하고, 서버가 탈락 처리한 뒤 부활 상태를 동기화. 클라이언트의 관전 입력 이후 카메라 오차 0, 공병 PULSE와 FIX 적용, 서버에 전송된 사격으로 탄창 6→5 확인.
- 별도 ENet 클라이언트 32개 동시 연결 재검사. 서버 인원 32, 클라이언트 32개 정상 종료, 해당 접속 시험 오류 로그 없음.
- 소프트웨어 OpenGL Compatibility 렌더러에서 메뉴·감도 설정·소총·정조준·스코프·재장전·장비 선택·공병 UI 화면 검토. 검토 화면의 FPS는 벤치마크가 아닙니다.
- Windows x64 내보내기 및 GitHub Actions 패키징.

## 검증하지 않은 범위

이 환경에서는 Windows 실행 파일을 실제 Windows에서 실행하지 않았습니다. 실제 Windows PC 여러 대의 LAN, 패킷 손실과 Wi-Fi 혼잡, 32명의 활발한 플레이, 장시간 안정성, 특정 내장그래픽의 FPS 성능은 별도 확인이 필요합니다. 봇 길찾기·목표 수행은 간단한 연습 수준입니다.

## 재현 명령

```sh
godot --headless --path . --editor --import --quit
godot --headless --path . --script tests/test_rules.gd
godot --headless --path . --script tests/test_regressions.gd
GODOT=godot python3 tests/run_network_probe.py
```

화면 검토: `godot --path . --script tests/visual_review.gd` (개발용 PNG는 /tmp/inc-*.png).

32개 접속 시험은 `-- --server --auto-start` 서버에 `-- --connect=127.0.0.1 --nick=TEST01 --quit-test`부터 TEST32까지 별도 프로세스로 실행합니다. 시험용 이름은 서로 달라야 합니다.
