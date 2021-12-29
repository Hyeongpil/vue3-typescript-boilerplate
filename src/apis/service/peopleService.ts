import { fetchPeopleApi } from "@/apis/repository/peopleRepository";
import { getPeopleViewModel } from "@/models/people";

export async function fetchPeople(userSeq: number) {
  const response = await fetchPeopleApi(userSeq);
  return getPeopleViewModel(response);
}

export async function fetchPeopleJob(userSeq: number) {
  const response = await fetchPeopleApi(userSeq);

  // 두개를 합치거나 조합을 해서

  // 비즈니스 로직이 이 안에 있게되면

  return getPeopleViewModel(response);
}
