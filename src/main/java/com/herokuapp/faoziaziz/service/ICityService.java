package com.herokuapp.faoziaziz.service;


import com.herokuapp.faoziaziz.model.City;
import java.util.List;

public interface ICityService {

    List<City> findAll();
    City findById(Long id);
}